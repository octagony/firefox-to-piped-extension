const btn = document.getElementById('mirror-btn')
const select = document.getElementById('mirrors-list')

const selectedMirror = mirror => {
	switch (mirror) {
		case 'garuda':
			return 'piped.garudalinux.org'
		case 'rocks':
			return 'piped.kavin.rocks'
	}
}

btn.addEventListener('click', () => {
	browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
		const replacedUrl = selectedMirror(select.value)
		const tab = tabs[0].url.replace('www.youtube.com', replacedUrl)
		if (tab.includes('undefined')) {
			browser.tabs.create({
				url: `https://piped.garudalinux.org/`,
			})
		} else {
			browser.tabs.create({
				url: `${tab}`,
			})
		}
	})
})
