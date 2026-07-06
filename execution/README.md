# ⚡ Execution (Camada de Execução)

Este diretório contém todos os **scripts Python determinísticos** do projeto JetSpeed.

## Princípios

1. **Determinístico:** Mesma entrada → mesma saída. Sempre.
2. **Autônomo:** Cada script funciona de forma independente
3. **Testável:** Pode ser executado e validado isoladamente
4. **Bem documentado:** Docstrings, type hints e comentários claros

## Estrutura

```
execution/
├── __init__.py      # Marca como pacote Python
├── utils.py         # Utilitários compartilhados (logging, file I/O, env)
├── README.md        # Este arquivo
└── [seus_scripts]   # Scripts criados conforme as diretivas
```

## Como Criar Novos Scripts

```python
"""
Descrição clara do que o script faz.
"""
from execution.utils import setup_logger, get_env, save_to_tmp

logger = setup_logger(__name__)

def main():
    logger.info("Iniciando execução...")
    # Sua lógica aqui
    logger.info("Concluído!")

if __name__ == "__main__":
    main()
```

## Scripts Disponíveis

| Script      | Descrição                                     |
|-------------|-----------------------------------------------|
| `utils.py`  | Utilitários compartilhados (logging, env, I/O)|

> Adicione novos scripts à tabela acima conforme forem criados.
