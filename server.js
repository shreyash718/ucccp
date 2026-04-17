const topics = [
  { id: 'vector', title: 'Vector / Dynamic Array', icon: '📦', color: '#00d4ff' },
  { id: 'prefix-sum', title: 'Prefix Sum', icon: '∑', color: '#ff6b6b' },
  { id: 'sliding-window', title: 'Sliding Window', icon: '🪟', color: '#ffd93d' },
  { id: 'two-pointer', title: 'Two Pointer', icon: '👆', color: '#6bcb77' },
  { id: 'greedy', title: 'Greedy Algorithm', icon: '🤑', color: '#ff922b' },
  { id: 'binary-search', title: 'Binary Search', icon: '🔍', color: '#cc5de8' },
  { id: 'dp', title: 'Dynamic Programming', icon: '🧠', color: '#20c997' },
];

const container = document.getElementById('topics-container');

if (container) {
  topics.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';

    card.innerHTML = `
      <div class="icon" style="color:${topic.color}">${topic.icon}</div>
      <h3>${topic.title}</h3>
    `;

    card.addEventListener('click', () => {
      window.location.href = `${topic.id}.html`;
    });

    container.appendChild(card);
  });
}