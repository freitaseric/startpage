import { Laptop, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

type Theme = 'light' | 'dark' | 'system'

export function ModeChanger() {
	const themes: Theme[] = ['light', 'dark', 'system']

	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window !== 'undefined') {
			return (localStorage.getItem('theme') as Theme) || 'system'
		}
		return 'system'
	})

	function cycleTheme() {
		const currentIndex = themes.indexOf(theme)
		const nextIndex = (currentIndex + 1) % themes.length
		setTheme(themes[nextIndex])
	}

	useEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('dark')

		if (theme === 'system') {
			const systemIsDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
			if (systemIsDark) {
				root.classList.add('dark')
			}
		} else if (theme === 'dark') {
			root.classList.add('dark')
		}
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={cycleTheme}
			title={`Tema atual: ${theme === 'light' ? 'Claro' : theme === 'dark' ? 'Escuro' : 'Sistema'}`}
		>
			<div className="relative flex items-center justify-center">
				{theme === 'light' && (
					<Sun className="h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0" />
				)}
				{theme === 'dark' && (
					<Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-100 rotate-0" />
				)}
				{theme === 'system' && (
					<Laptop className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-100" />
				)}
				<span className="sr-only">Change</span>
			</div>
		</Button>
	)
}
