(function () {
	'use strict';
	// key: タスクの文字列 value: 完了しているかどうかの真偽値
	let tasks = new Map();
	
	/**
	 * TODOを追加する
	 * @param {string} task
	 */
	function todo(task) {
		tasks.set(task, false);
	}
	
	/**
	 * TODOの一覧の配列を取得する
	 * @return {array}
	 */
	function list() {
		return Array.from(tasks)
			.filter(t => !t[1])
			.map(t => t[0]);
	}
	
	/**
	 * TODOを完了状態にする
	 * @param {string} task
	 */
	function done(task) {
		if (tasks.has(task)) {
			tasks.set(task, true);
		}
	}
	
	/**
	 * 完了済みのタスクの一覧の配列を取得する
	 * @return {array}
	 */
	function donelist() {
		return Array.from(tasks)
			.filter(t => t[1])
			.map(t => t[0]);
	}
	
	/**
	 * 項目を削除する
	 * @param {string} task
	 */
	function del(task) {
		tasks.delete(task);
	}
	
	module.exports = {
		todo: todo,
		list: list,
		done: done,
		donelist: donelist,
		del: del
	};
})();
