/* tabs menu */
; (() => {
	'use strict';

	function switchTab(menu, tab) {
		let items = menu.querySelectorAll('li');
		let currIndex;

		[].forEach.call(items, (item, index) => {
			item.classList.remove('js-active-tab');
			if (item === tab) {
				item.classList.add('js-active-tab');
				currIndex = index;
			}
		});
		return currIndex;
	}

	function switchBlock(menu, currIndex, tabItem) {
		const blocks = tabItem.querySelectorAll('.tab__Item');

		[].forEach.call(blocks, (block, index) => {
			block.removeAttribute('style');
			if (index == currIndex) block.style.display = 'block';
		});
	};

	function creatTab(tabMenuNode, tabContainerNode) {
		const tabsmenu = document.querySelectorAll(tabMenuNode);
		if (!tabsmenu) return;
		const content = document.querySelector(tabContainerNode);

		[].forEach.call(tabsmenu, (menu) => {
			menu.addEventListener('click', (el) => {
				if (el.target.tagName == 'LI') {
					const currIndex = switchTab(menu, el.target);
					switchBlock(menu, currIndex, content);
				};
			});
		});
	};

	creatTab('.js-tabs-menu', ".js-tabs-container");
	// creatTab('.js-tabs-menu1', ".js-tabs-container1");
})();