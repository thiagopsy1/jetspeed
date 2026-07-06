"""
JetSpeed - Utilitários Compartilhados
=====================================
Funções auxiliares usadas por todos os scripts de execução.
Centraliza logging, carregamento de .env e helpers comuns.
"""

import os
import sys
import json
import logging
from pathlib import Path
from datetime import datetime
from dotenv import load_dotenv

# ============================================================
# Configuração do Ambiente
# ============================================================

# Encontra a raiz do projeto (onde o .env está)
PROJECT_ROOT = Path(__file__).resolve().parent.parent
TMP_DIR = PROJECT_ROOT / ".tmp"

# Carrega variáveis de ambiente
load_dotenv(PROJECT_ROOT / ".env")


def ensure_tmp_dir() -> Path:
    """Garante que o diretório .tmp/ existe e retorna o caminho."""
    TMP_DIR.mkdir(exist_ok=True)
    return TMP_DIR


# ============================================================
# Logging
# ============================================================

def setup_logger(name: str, level: str = None) -> logging.Logger:
    """
    Configura e retorna um logger padronizado.
    
    Args:
        name: Nome do logger (geralmente __name__ do script)
        level: Nível de log (DEBUG, INFO, WARNING, ERROR). 
               Usa a variável LOG_LEVEL do .env como fallback.
    
    Returns:
        Logger configurado com formatação consistente.
    """
    log_level = level or os.getenv("LOG_LEVEL", "INFO")
    
    logger = logging.getLogger(name)
    logger.setLevel(getattr(logging, log_level.upper(), logging.INFO))
    
    # Evita duplicação de handlers
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        formatter = logging.Formatter(
            fmt="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S"
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    
    return logger


# ============================================================
# Helpers de Arquivo
# ============================================================

def load_json(filepath: str | Path) -> dict:
    """Carrega um arquivo JSON e retorna como dicionário."""
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(data: dict, filepath: str | Path, indent: int = 2) -> None:
    """Salva um dicionário como arquivo JSON."""
    path = Path(filepath)
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=indent)


def save_to_tmp(data: dict, filename: str) -> Path:
    """
    Salva dados no diretório .tmp/ com timestamp.
    
    Args:
        data: Dicionário a ser salvo
        filename: Nome do arquivo (sem extensão)
    
    Returns:
        Path do arquivo salvo
    """
    tmp = ensure_tmp_dir()
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filepath = tmp / f"{filename}_{timestamp}.json"
    save_json(data, filepath)
    return filepath


# ============================================================
# Helpers de Ambiente
# ============================================================

def get_env(key: str, required: bool = True) -> str | None:
    """
    Obtém uma variável de ambiente com validação.
    
    Args:
        key: Nome da variável
        required: Se True, levanta erro quando não encontrada
    
    Returns:
        Valor da variável ou None
    
    Raises:
        EnvironmentError: Se a variável é obrigatória e não está definida
    """
    value = os.getenv(key)
    if required and not value:
        raise EnvironmentError(
            f"Variável de ambiente '{key}' não encontrada. "
            f"Verifique o arquivo .env em {PROJECT_ROOT / '.env'}"
        )
    return value


# ============================================================
# Helpers de Validação
# ============================================================

def validate_file_exists(filepath: str | Path, description: str = "Arquivo") -> Path:
    """
    Valida que um arquivo existe e retorna o Path.
    
    Raises:
        FileNotFoundError: Se o arquivo não existe
    """
    path = Path(filepath)
    if not path.exists():
        raise FileNotFoundError(f"{description} não encontrado: {path}")
    return path
