import { computed, unref } from 'vue'

const UNITS = [
	{ max: 60000, value: 1000, name: 'second' },
	{ max: 2760000, value: 60000, name: 'minute' },
	{ max: 72000000, value: 3600000, name: 'hour' },
	{ max: 518400000, value: 86400000, name: 'day' },
	{ max: 2419200000, value: 604800000, name: 'week' },
	{ max: 28512000000, value: 2592000000, name: 'month' },
	{ max: Infinity, value: 31536000000, name: 'year' }
]

const DEFAULT_MESSAGES = {
	justNow: 'just now',
	past: n => (n.match(/\d/) ? `${n} ago` : n),
	future: n => (n.match(/\d/) ? `in ${n}` : n),
	month: (n, past) =>
		n === 1
			? past
				? 'last month'
				: 'next month'
			: `${n} month${n > 1 ? 's' : ''}`,
	year: (n, past) =>
		n === 1
			? past
				? 'last year'
				: 'next year'
			: `${n} year${n > 1 ? 's' : ''}`,
	day: (n, past) =>
		n === 1
			? past
				? 'yesterday'
				: 'tomorrow'
			: `${n} day${n > 1 ? 's' : ''}`,
	week: (n, past) =>
		n === 1
			? past
				? 'last week'
				: 'next week'
			: `${n} week${n > 1 ? 's' : ''}`,
	hour: n => `${n} hour${n > 1 ? 's' : ''}`,
	minute: n => `${n} minute${n > 1 ? 's' : ''}`,
	second: n => `${n} second${n > 1 ? 's' : ''}`
}

const DEFAULT_FORMATTER = date =>
	date.toISOString().slice(0, 10)

/**
 * 时间线
 */
export const useTimeAgo = (time, options = {}) => {
	const {
		controls: exposeControls = false,
		max,
		updateInterval = 30_000,
		messages = DEFAULT_MESSAGES,
		fullDateFormatter = DEFAULT_FORMATTER
	} = options

	const { abs, round } = Math
	const { now, ...controls } = useNow({
		interval: updateInterval,
		controls: true
	})

	function getTimeago(from, now) {
		const diff = +now - +from
		const absDiff = abs(diff)

		// less than a minute
		if (absDiff < 60000) return messages.justNow

		if (typeof max === 'number' && absDiff > max)
			return fullDateFormatter(new Date(from))

		if (typeof max === 'string') {
			const unitMax = UNITS.find(i => i.name === max)?.max
			if (unitMax && absDiff > unitMax)
				return fullDateFormatter(new Date(from))
		}

		for (const unit of UNITS) {
			if (absDiff < unit.max) return format(diff, unit)
		}
	}

	function applyFormat(name, val, isPast) {
		const formatter = messages[name]
		if (typeof formatter === 'function')
			return formatter(val, isPast)
		return formatter.replace('{0}', val.toString())
	}

	function format(diff, unit) {
		const val = round(abs(diff) / unit.value)
		const past = diff > 0

		const str = applyFormat(unit.name, val, past)
		return applyFormat(past ? 'past' : 'future', str, past)
	}

	const timeAgo = computed(() =>
		getTimeago(new Date(unref(time)), unref(now.value))
	)

	if (exposeControls) {
		return {
			timeAgo,
			...controls
		}
	} else {
		return timeAgo
	}
}
