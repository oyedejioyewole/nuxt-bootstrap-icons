<template>
  <nav class="fixed right-5 top-1/2 -translate-y-1/2">
    <ul class="flex flex-col items-end space-y-4">
      <li>
        <UIButton
          to="/"
          variant="navigation"
          :class="{
            'bg-primary-300 dark:bg-primary-700': $route.name === 'index',
          }"
        >
          <BootstrapIcon name="house" />
        </UIButton>
      </li>
      <li>
        <UIButton
          to="/playground"
          variant="navigation"
          :class="{
            'bg-primary-300 dark:bg-primary-700': $route.name === 'playground',
          }"
        >
          <BootstrapIcon name="code-slash" />
        </UIButton>
      </li>
      <li>
        <UIButton
          to="/release-notes"
          variant="navigation"
          :class="{
            'bg-primary-300 dark:bg-primary-700':
              $route.name === 'release-notes',
          }"
        >
          <BootstrapIcon name="stars" />
        </UIButton>
      </li>
    </ul>
  </nav>
</template>
