const who = document.getElementById('who')
const list = document.getElementById('items')
const form = document.getElementById('add')

async function refresh() {
  const me = await amorphous.me()
  who.textContent = me ? me.name : 'Sign in to take part'
  const rows = await amorphous.data.find()
  list.replaceChildren()
  for (const row of rows) {
    const li = document.createElement('li')
    li.textContent = typeof row.text === 'string' ? row.text : ''
    list.appendChild(li)
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const text = new FormData(form).get('text')
  if (typeof text !== 'string' || !text.trim()) return
  await amorphous.data.insert({ text: text.trim() })
  form.reset()
  await refresh()
})

refresh()
