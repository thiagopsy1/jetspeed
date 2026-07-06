# 📋 Diretivas

Este diretório contém todas as **SOPs (Standard Operating Procedures)** do projeto JetSpeed.

## Como Funciona

Cada arquivo `.md` aqui é uma diretiva — um conjunto de instruções que o agente AI lê para saber **o que fazer** e **como fazer**.

### Regras:
1. **Use o template:** Copie `_template.md` para criar novas diretivas
2. **Seja específico:** Inclua inputs, outputs, scripts envolvidos e edge cases
3. **Mantenha atualizado:** Quando aprender algo novo (limites de API, bugs, etc.), atualize a diretiva correspondente
4. **Não delete:** Marque como "Deprecado" em vez de deletar

## Estrutura de uma Diretiva

```
Objetivo → O que fazer
Pré-requisitos → O que precisa antes
Inputs → O que entra
Scripts → Ferramentas para executar
Fluxo → Ordem das operações
Outputs → O que sai
Erros → O que pode dar errado e como resolver
Histórico → O que aprendemos ao longo do tempo
```

## Diretivas Disponíveis

| Diretiva | Status | Descrição |
|----------|--------|-----------|
| `_template.md` | Template | Modelo base para novas diretivas |

> Adicione novas diretivas à tabela acima conforme forem criadas.
