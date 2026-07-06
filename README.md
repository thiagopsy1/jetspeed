# ⚡ JetSpeed

Sistema de automação inteligente baseado na arquitetura **DOE** (Directive-Orchestration-Execution).

## 🏗️ Arquitetura de 3 Camadas

```
┌─────────────────────────────────────────────────────────┐
│                    LAYER 1: DIRECTIVES                  │
│              directives/*.md (SOPs em Markdown)         │
│         Define: objetivos, inputs, outputs, erros       │
├─────────────────────────────────────────────────────────┤
│                  LAYER 2: ORCHESTRATION                 │
│                    🤖 Agente AI (Você)                  │
│         Lê diretivas → Toma decisões → Executa          │
├─────────────────────────────────────────────────────────┤
│                    LAYER 3: EXECUTION                   │
│            execution/*.py (Scripts Python)               │
│       Determinístico, testável, rápido, confiável       │
└─────────────────────────────────────────────────────────┘
```

### Por que funciona?

Se a IA faz tudo sozinha, erros se acumulam:
- 90% de precisão por passo × 5 passos = **59% de sucesso**

A solução: empurrar a complexidade para **código determinístico** e deixar a IA focar em **decisões**.

## 📁 Estrutura do Projeto

```
JetSpeed/
├── AGENTS.md              # Instruções do agente (espelhado)
├── CLAUDE.md              # Instruções do agente (espelhado)
├── GEMINI.md              # Instruções do agente (espelhado)
├── README.md              # Este arquivo
├── .env                   # Variáveis de ambiente (não versionado)
├── .gitignore             # Arquivos ignorados pelo git
├── requirements.txt       # Dependências Python
│
├── directives/            # 📋 Camada 1: SOPs em Markdown
│   ├── README.md          # Guia de uso das diretivas
│   └── _template.md       # Template para novas diretivas
│
├── execution/             # ⚡ Camada 3: Scripts Python
│   ├── __init__.py        # Marca como pacote
│   ├── utils.py           # Utilitários compartilhados
│   └── README.md          # Guia de uso dos scripts
│
└── .tmp/                  # 🗑️ Arquivos temporários (não versionado)
    └── .gitkeep           # Mantém o diretório no git
```

## 🚀 Começando

### 1. Configurar ambiente

```bash
# Instalar dependências
pip install -r requirements.txt

# Configurar variáveis de ambiente
# Edite o arquivo .env com suas chaves de API
```

### 2. Criar uma diretiva

Copie `directives/_template.md` e preencha com as instruções da sua tarefa.

### 3. Executar

O agente AI lê a diretiva, decide a ordem das operações e executa os scripts correspondentes.

## 🔄 Self-Annealing (Auto-correção)

Quando algo quebra, o sistema se fortalece:

1. **Erro detectado** → Lê stack trace
2. **Script corrigido** → Testa novamente
3. **Diretiva atualizada** → Registra o aprendizado
4. **Sistema mais forte** → Não repete o mesmo erro

## 📝 Convenções

- **Diretivas:** Escritas em português, usando o template padrão
- **Scripts:** Python com docstrings, type hints e logging via `utils.py`
- **Variáveis:** Todas no `.env`, nunca hardcoded
- **Temporários:** Sempre em `.tmp/`, nunca na raiz
