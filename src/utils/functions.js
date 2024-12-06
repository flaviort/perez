export function phone(str) {
	return (
		'tel:' + str.replace(/[^0-9]/g, '')
	)
}

export function email(str) {
	return (
		'mailto:' + str
	)
}

// get vw / vh
export const vw = (coef) => window.innerWidth * (coef/100)
export const vh = (coef) => window.innerHeight * (coef/100)

// limit characters
export function limitCharacters(text, limit) {
    if (text.length <= limit) {
        return text
    } else {
        return text.slice(0, limit) + '...'
    }
}

// slugify
export function slugify(str) {
    return String(str)
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}