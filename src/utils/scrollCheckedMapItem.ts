export const scrollCheckedMapItem = () => {
  setTimeout(() => {
    document.querySelector('[data-checked="true"]').scrollIntoView()
  }, 500)
}
