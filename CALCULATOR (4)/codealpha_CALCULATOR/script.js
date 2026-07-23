const expressionEl = document.querySelector("#expression");
const previewEl = document.querySelector("#preview");
const keys = document.querySelectorAll(".key");

let expression = "";
let justCalculated = false;

const operatorSymbols = {
  "+": "+",
  "-": "−",
  "*": "×",
  "/": "÷",
};

function renderExpression(value) {
  if (!value) return "0";

  return value.replace(/[+\-*/]/g, (operator) => operatorSymbols[operator]);
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function getCurrentNumber() {
  const parts = expression.split(/[+\-*/]/);
  return parts[parts.length - 1] || "";
}

function sanitizeForPreview(value) {
  return value.replace(/[+\-*/.]+$/, "");
}

function isSafeExpression(value) {
  return /^[0-9+\-*/.]+$/.test(value) && /\d/.test(value);
}

function formatResult(value) {
  if (!Number.isFinite(value)) return "Cannot divide by 0";

  const rounded = Number.parseFloat(value.toFixed(10));
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 10,
  }).format(rounded);
}

function evaluate(value) {
  const safeValue = sanitizeForPreview(value);

  if (!isSafeExpression(safeValue)) return "";

  try {
    return formatResult(Function(`"use strict"; return (${safeValue})`)());
  } catch {
    return "";
  }
}

function updateDisplay() {
  expressionEl.textContent = renderExpression(expression);
  previewEl.textContent = evaluate(expression) || "0";
}

function appendValue(value) {
  if (justCalculated && !isOperator(value)) {
    expression = "";
  }

  justCalculated = false;

  if (isOperator(value)) {
    if (!expression && value !== "-") return;

    const lastChar = expression.at(-1);
    if (isOperator(lastChar)) {
      expression = expression.slice(0, -1) + value;
    } else {
      expression += value;
    }
    updateDisplay();
    return;
  }

  if (value === ".") {
    if (getCurrentNumber().includes(".")) return;
    expression += getCurrentNumber() ? "." : "0.";
    updateDisplay();
    return;
  }

  expression += value;
  updateDisplay();
}

function clearAll() {
  expression = "";
  justCalculated = false;
  updateDisplay();
}

function backspace() {
  expression = expression.slice(0, -1);
  justCalculated = false;
  updateDisplay();
}

function calculate() {
  const result = evaluate(expression);
  if (!result || result === "Cannot divide by 0") return;

  expression = result.replace(/,/g, "");
  justCalculated = true;
  updateDisplay();
}

function flashKey(selector) {
  const key = document.querySelector(selector);
  if (!key) return;

  key.classList.add("is-pressed");
  window.setTimeout(() => key.classList.remove("is-pressed"), 120);
}

function handleAction(action) {
  if (action === "clear") clearAll();
  if (action === "backspace") backspace();
  if (action === "equals") calculate();
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const { value, action } = key.dataset;
    if (value) appendValue(value);
    if (action) handleAction(action);
  });
});

document.addEventListener("keydown", (event) => {
  const { key } = event;

  if (/^[0-9]$/.test(key) || ["+", "-", "*", "/", "."].includes(key)) {
    event.preventDefault();
    appendValue(key);
    flashKey(`[data-value="${CSS.escape(key)}"]`);
    return;
  }

  if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
    flashKey('[data-action="equals"]');
    return;
  }

  if (key === "Backspace") {
    event.preventDefault();
    backspace();
    flashKey('[data-action="backspace"]');
    return;
  }

  if (key === "Escape" || key.toLowerCase() === "c") {
    event.preventDefault();
    clearAll();
    flashKey('[data-action="clear"]');
  }
});

updateDisplay();
