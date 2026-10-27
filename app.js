const STORAGE_KEY = 'carnet-noel-v1';
const defaultTasks = [
  { id: 'dates', text: 'Choisir les dates', done: false, custom: false },
  { id: 'budget', text: 'Définir un budget', done: false, custom: false },
  { id: 'transport', text: 'Réserver le transport', done: false, custom: false },
  { id: 'logement', text: 'Trouver un hébergement', done: false, custom: false },
  { id: 'valises', text: 'Préparer les valises', done: false, custom: false },
];

const form = document.querySelector('#trip-form');
const list = document.querySelector('#checklist');
const addTaskForm = document.querySelector('#add-task-form');
const saveStatus = document.querySelector('#save-status');

function readSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      trip: saved.trip && typeof saved.trip === 'object' ? saved.trip : {},
      tasks: Array.isArray(saved.tasks) ? saved.tasks.filter(task => task && typeof task.text === 'string') : defaultTasks,
    };
  } catch {
    return { trip: {}, tasks: defaultTasks };
  }
}

const state = readSavedState();

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    saveStatus.textContent = 'Tes notes sont enregistrées sur cet appareil.';
  } catch {
    saveStatus.textContent = 'Enregistrement impossible : vérifie les réglages du navigateur.';
  }
}

for (const field of form.elements) {
  if (field.name && Object.hasOwn(state.trip, field.name)) field.value = state.trip[field.name];
}

form.addEventListener('input', event => {
  const field = event.target;
  if (!field.name) return;
  state.trip[field.name] = field.value;
  save();
});

form.addEventListener('submit', event => event.preventDefault());

document.querySelectorAll('[data-idea]').forEach(button => {
  button.addEventListener('click', () => {
    const input = document.querySelector('#destination');
    input.value = button.dataset.idea;
    state.trip.destination = input.value;
    save();
    document.querySelector('#mon-voyage').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    input.focus({ preventScroll: true });
  });
});

function updateProgress() {
  const completed = state.tasks.filter(task => task.done).length;
  const total = state.tasks.length;
  document.querySelector('#progress-label').textContent = `${completed} / ${total}`;
  const bar = document.querySelector('#progress-bar');
  bar.setAttribute('aria-valuemax', String(total));
  bar.setAttribute('aria-valuenow', String(completed));
  document.querySelector('#progress-fill').style.width = `${total ? (completed / total) * 100 : 0}%`;
}

function renderTasks() {
  list.replaceChildren();
  state.tasks.forEach(task => {
    const item = document.createElement('li');
    item.className = task.done ? 'task done' : 'task';

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = Boolean(task.done);
    checkbox.addEventListener('change', () => {
      task.done = checkbox.checked;
      item.classList.toggle('done', task.done);
      updateProgress();
      save();
    });
    const name = document.createElement('span');
    name.textContent = task.text;
    label.append(checkbox, name);
    item.append(label);

    if (task.custom) {
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'remove-task';
      remove.setAttribute('aria-label', `Supprimer l'étape ${task.text}`);
      remove.textContent = '×';
      remove.addEventListener('click', () => {
        state.tasks = state.tasks.filter(entry => entry.id !== task.id);
        renderTasks();
        save();
      });
      item.append(remove);
    }
    list.append(item);
  });
  updateProgress();
}

addTaskForm.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#new-task');
  const text = input.value.trim();
  if (!text) return;
  state.tasks.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), text, done: false, custom: true });
  input.value = '';
  renderTasks();
  save();
  input.focus();
});

renderTasks();
