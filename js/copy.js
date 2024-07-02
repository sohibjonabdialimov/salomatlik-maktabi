// const clipboard = document.getElementById('course-url');
// const tooltip = document.getElementById("tooltip-course-url");
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'course-url');
const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-course-url');

const defaultIcon = document.getElementById('default-icon-course-url');
const successIcon = document.getElementById('success-icon-course-url');
const btn = document.getElementById('btn');

const defaultTooltipMessage = document.getElementById('default-tooltip-message-course-url');
const successTooltipMessage = document.getElementById('success-tooltip-message-course-url');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  showSuccess();
  console.log('copied');
  setTimeout(() => {
    resetToDefault();
  }, 3000);
});

const showSuccess = () => {
  defaultIcon.style.display = "none";
  successIcon.style.display = "inline-flex";
  defaultTooltipMessage.classList.add('hidden');
  successTooltipMessage.classList.remove('hidden');
  // tooltip.show();
}

const resetToDefault = () => {
  defaultIcon.style.display = "block";
  successIcon.style.display = "none";
  defaultTooltipMessage.classList.remove('hidden');
  successTooltipMessage.classList.add('hidden');
  // tooltip.hide();
}