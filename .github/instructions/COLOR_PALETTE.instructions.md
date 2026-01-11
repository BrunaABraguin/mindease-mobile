# 🎨 PALETA DE CORES OBRIGATÓRIA - MindEase

## 📋 Uso Obrigatório da Paleta de Cores

**⚠️ IMPORTANTE:** Esta paleta de cores foi especificamente desenvolvida para atender aos requisitos de **acessibilidade cognitiva** do hackathon. O uso exclusivo desta paleta é **OBRIGATÓRIO** em todo o desenvolvimento do projeto MindEase.

---

## 🧠 Fundamentação Cognitiva

### Por que esta paleta é obrigatória?

A paleta MindEase foi criada com base em:

1. **Pesquisas em neurociência** sobre processamento visual em pessoas neurodivergentes
2. **Diretrizes WCAG** para acessibilidade cognitiva
3. **Feedback de usuários** com TDAH, TEA, dislexia e outras condições
4. **Princípios de design inclusivo** para reduzir sobrecarga sensorial

### 🎯 Objetivos da Paleta

- **Reduzir fadiga visual** em sessões prolongadas de uso
- **Minimizar sobrecarga sensorial** para usuários com TEA
- **Melhorar foco e concentração** para usuários com TDAH
- **Facilitar leitura** para usuários com dislexia
- **Proporcionar calma** para usuários com ansiedade

---

## 🚫 PROIBIÇÕES

### ❌ O que NÃO fazer

1. **NUNCA adicionar cores fora da paleta definida**
2. **NUNCA usar cores de alta saturação** (ex: vermelho puro #FF0000)
3. **NUNCA usar gradientes complexos** ou efeitos visuais agressivos
4. **NUNCA usar cores piscantes** ou com animações rápidas
5. **NUNCA ignorar os modos cognitivos** (focus, calm, highContrast)

### 🚨 Cores Especificamente Proibidas

```typescript
// ❌ CORES PROIBIDAS - NÃO USAR
const FORBIDDEN_COLORS = {
  brightRed: '#FF0000',      // Muito agressivo
  neonGreen: '#00FF00',      // Sobrecarga sensorial
  electricBlue: '#0080FF',   // Muito estimulante
  hotPink: '#FF1493',        // Causa fadiga visual
  brightYellow: '#FFFF00',   // Dificulta leitura
  darkBlack: '#000000',      // Apenas para texto específico
  brightWhite: '#FFFFFF',    // Apenas para fundos específicos
};
```

---

## ✅ REGRAS DE USO OBRIGATÓRIAS

### 1. 🎨 Importação da Paleta

```typescript
// ✅ FORMA CORRETA de importar cores
import { colors, getColorsByMode } from '@/theme/colors';

// ✅ Uso baseado em modo cognitivo
const currentColors = getColorsByMode('calm'); // ou 'focus', 'highContrast'
```

### 2. 🎯 Hierarquia de Cores por Funcionalidade

#### **Fundos (Backgrounds)**
```typescript
// ✅ USO CORRETO
backgroundColor: colors.background.primary,     // Fundo principal
backgroundColor: colors.background.secondary,   // Fundo secundário
backgroundColor: colors.background.focus,       // Modo foco
backgroundColor: colors.background.card,        // Cards/containers
```

#### **Textos**
```typescript
// ✅ USO CORRETO
color: colors.text.primary,      // Texto principal
color: colors.text.secondary,    // Texto secundário
color: colors.text.muted,        // Texto auxiliar
color: colors.text.inverse,      // Texto em fundo escuro
```

#### **Elementos Interativos**
```typescript
// ✅ USO CORRETO
backgroundColor: colors.accent.primary,        // Botões principais
backgroundColor: colors.accent.secondary,      // Botões secundários
borderColor: colors.border.accent,            // Bordas de destaque
```

### 3. 🧩 Modos Cognitivos Obrigatórios

#### **Implementação Obrigatória dos Modos**

```typescript
// ✅ IMPLEMENTAÇÃO OBRIGATÓRIA
const CognitiveComponent = ({ cognitiveMode = 'standard' }) => {
  const modeColors = getColorsByMode(cognitiveMode);
  
  return (
    <View style={{
      backgroundColor: modeColors.background.primary,
      // ...resto do estilo
    }}>
      {/* conteúdo */}
    </View>
  );
};
```

---

## 📚 GUIA DE IMPLEMENTAÇÃO

### 🎨 Por Funcionalidade

#### **1. Timer/Pomodoro**
```typescript
// ✅ Cores específicas para timer
const timerStyles = {
  focusSession: colors.cognitive.timerFocus,    // #DC2626 (vermelho suave)
  breakSession: colors.cognitive.timerBreak,    // #059669 (verde suave)
  progress: colors.cognitive.progressBar,       // #88BC95 (sage mint)
};
```

#### **2. Hábitos/Conquistas**
```typescript
// ✅ Cores para gamificação suave
const habitStyles = {
  streak: colors.cognitive.habitStreak,         // #F0B75E (dourado suave)
  completed: colors.semantic.success,           // #059669 (verde)
  pending: colors.text.muted,                  // #9CA3AF (cinza)
};
```

#### **3. Tarefas/Kanban**
```typescript
// ✅ Cores para organização
const taskStyles = {
  todo: colors.border.light,                   // Cinza claro
  inProgress: colors.accent.secondary,         // Azul celestial
  completed: colors.accent.primary,            // Verde sálvia
};
```

### 🎛️ Modos Cognitivos Específicos

#### **Modo Focus (Reduz Distrações)**
```typescript
const focusMode = {
  background: colors.cognitive.focusBackground, // #FAFAFA
  text: colors.cognitive.focusText,            // #1F2937
  accent: '#6B7280',                           // Cinza neutro
  border: colors.cognitive.focusBorder,        // #E5E7EB
};
```

#### **Modo Calm (Reduz Estimulação)**
```typescript
const calmMode = {
  background: colors.cognitive.calmBackground, // #F8FAFC
  text: colors.cognitive.calmText,            // #475569
  accent: colors.cognitive.calmAccent,        // #94A3B8
};
```

---

## 🔍 VALIDAÇÃO E CONTROLE

### 🛡️ Checklist de Validação

Antes de fazer commit, verifique:

- [ ] ✅ Todas as cores vêm de `@/utils/theme`
- [ ] ✅ Nenhuma cor hardcoded fora da paleta
- [ ] ✅ Modos cognitivos implementados
- [ ] ✅ Contraste adequado (mínimo 4.5:1)
- [ ] ✅ Sem cores piscantes ou muito saturadas
- [ ] ✅ Testado em modo focus/calm/highContrast

### 🔧 Ferramenta de Validação

```typescript
// ✅ Função para validar uso de cores
export const validateColorUsage = (styleObject: any) => {
  const allowedColors = Object.values(colors).flat();
  
  // Implementar validação aqui
  // Lançar erro se cor não estiver na paleta
};
```

---

## 🚨 PENALIZAÇÕES

### ⚠️ Critérios de Desqualificação

O não cumprimento desta documentação resultará em:

1. **Redução de pontuação** no critério "Acessibilidade Cognitiva"
2. **Solicitação de refatoração** completa da interface
3. **Possível desqualificação** se mudanças não forem implementadas

---

## 🎓 JUSTIFICATIVA ACADÊMICA

### 📖 Base Teórica

Esta abordagem está fundamentada em:

1. **ISO 14289** - Acessibilidade em documentos PDF aplicada a interfaces
2. **WCAG 2.1 Critério 1.4** - Distinguibilidade
3. **Research in Autism Spectrum Disorders** - Processamento sensorial
4. **Journal of Attention Disorders** - Design para TDAH

### 🎯 Objetivos de Aprendizagem

Ao seguir esta paleta, você demonstra:

- **Conhecimento em acessibilidade cognitiva**
- **Aplicação de design inclusivo**
- **Consideração por usuários neurodivergentes**
- **Desenvolvimento responsável e empático**

---

## 📞 SUPORTE

### ❓ Dúvidas Frequentes

**P: Posso usar uma cor similar?**
R: ❌ Não. Use exatamente as cores definidas na paleta.

**P: E se eu precisar de uma cor específica?**
R: 🔄 Revise seu design. A paleta cobre todos os casos necessários.

**P: Posso criar variações das cores?**
R: ❌ Não. Use os modos cognitivos já definidos.

**P: Como testo acessibilidade cognitiva?**
R: ✅ Teste nos 3 modos: standard, focus e calm.

---

**💡 Lembre-se: Esta paleta não é uma limitação, é uma ferramenta poderosa para criar experiências verdadeiramente inclusivas.**
