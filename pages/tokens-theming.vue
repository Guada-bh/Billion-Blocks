<template>
  <div class="ds-page">
    <div class="ds-hero">
      <h1 class="ds-title">Tokens & Theming</h1>
      <p class="ds-lead text-secondary">
        Modelo de tokens y temas. Los tokens son la fuente de verdad; el theming cambia valores según tema claro/oscuro.
      </p>
    </div>

    <section class="ds-section">
      <h2 class="ds-section-title">Modelo</h2>
      <p class="ds-body text-secondary">
        <strong>Tokens base (primitivos)</strong>
        : valores crudos de color, tamaño, etc. Definidos en
        <code>assets/css/colors.css</code>
        ,
        <code>typography.css</code>
        ,
        <code>spacing.css</code>
        ,
        <code>buttons.css</code>
        .
      </p>
      <p class="ds-body text-secondary">
        <strong>Tokens semánticos</strong>
        : nombres por uso (e.g.
        <code>--bb-text-color-primary</code>
        ,
        <code>--bb-background-default</code>
        ) que referencian los primitivos. El tema (light/dark) reasigna esos semánticos sin tocar el código de
        componentes.
      </p>
      <p class="ds-body text-secondary">
        <strong>Theming</strong>
        : en el root se aplica
        <code>data-theme="light"</code>
        o
        <code>data-theme="dark"</code>
        . Las reglas en
        <code>html[data-theme='light']</code>
        sobrescriben las variables por defecto (dark).
      </p>
    </section>

    <section class="ds-section">
      <h2 class="ds-section-title">Tabla de tokens (básica)</h2>
      <p class="ds-body text-secondary">
        Referencia rápida de variables CSS. Usar siempre estas variables en lugar de valores fijos.
      </p>
      <div class="ds-tokens-table-wrap">
        <table class="ds-tokens-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>--bb-background-default</code></td>
              <td>Fondo principal de la app</td>
            </tr>
            <tr>
              <td><code>--bb-text-color-primary</code></td>
              <td>Texto principal</td>
            </tr>
            <tr>
              <td><code>--bb-primary-default</code></td>
              <td>Color primario (CTAs, links)</td>
            </tr>
            <tr>
              <td>
                <code>--bb-neutral-soft</code>
                ,
                <code>--bb-neutral-base</code>
                ,
                <code>--bb-neutral-strong</code>
              </td>
              <td>Superficies y bordes</td>
            </tr>
            <tr>
              <td><code>--bb-font-family-default</code></td>
              <td>Tipografía (Satoshi)</td>
            </tr>
            <tr>
              <td>
                <code>--bb-heading-md</code>
                ,
                <code>--bb-heading-xs</code>
              </td>
              <td>Tamaños de heading</td>
            </tr>
            <tr>
              <td>
                <code>--bb-p-xl</code>
                ,
                <code>--bb-p-md</code>
              </td>
              <td>Tamaños de párrafo</td>
            </tr>
            <tr>
              <td>
                <code>--bb-space-4</code>
                …
                <code>--bb-space-80</code>
              </td>
              <td>Espaciado</td>
            </tr>
            <tr>
              <td><code>--bb-button-*</code></td>
              <td>Botones (bg, padding, radius, etc.)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'doc' })
</script>

<style scoped>
.ds-tokens-table-wrap {
  overflow-x: auto;
  margin-top: var(--bb-space-16);
}

.ds-tokens-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.ds-tokens-table th,
.ds-tokens-table td {
  padding: var(--bb-space-12) var(--bb-space-16);
  text-align: left;
  border-bottom: 1px solid var(--bb-neutral-base);
  color: var(--bb-text-color-primary);
}

.ds-tokens-table th {
  font-weight: 600;
  background: var(--bb-neutral-light);
}

.ds-tokens-table code {
  font-size: 12px;
  padding: 2px 6px;
  background: var(--bb-neutral-base);
  border-radius: 4px;
  color: var(--bb-neutral-strong);
}
</style>
