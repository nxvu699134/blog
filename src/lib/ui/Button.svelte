<script>
  import { createEventDispatcher } from "svelte";
  let outsideClass = "";
  export { outsideClass as class };

  let size = "md-size";

  const className = `${size} ${outsideClass}`;

  const dispatch = createEventDispatcher();
  const onClick = () => dispatch("click");
</script>

<button class={className} on:click={onClick}>
  <slot />
</button>

<style>
  button {
    background-color: var(--color-main-bg);
    transition: all 0.2s ease-in-out;
    outline: 0;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    box-shadow: var(--shadow-outset-200);
    cursor: pointer;
  }

  button:not(:disabled):active {
    box-shadow: var(--shadow-inset-200);
  }

  button:focus {
    outline: 0;
  }

  button.md-size {
    padding: 0.375rem 0.5rem;
    font-size: 1rem;
  }

  button.lg-size {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }

  button.sm-size {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    font-weight: normal;
  }
</style>
