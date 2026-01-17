import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'
import { ModeChanger } from './ModeChanger'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel, // Usaremos Label ou uma div customizada
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function PopupMenu() {
	const [open, setOpen] = useState(false)

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full border-zinc-700 bg-zinc-900 text-zinc-100 shadow-xl hover:bg-zinc-800"
				>
					{!open && <PlusIcon className="h-6 w-6" />}
					{open && <MinusIcon className="h-6 w-6" />}
					<span className="sr-only">Abrir menu</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				className="w-56"
				align="end"
				side="top"
				sideOffset={10}
			>
				<DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
				<DropdownMenuGroup>
					<div className="flex items-center justify-between px-2 py-1.5 text-sm outline-none">
						<span className="font-medium text-muted-foreground">
							Change Theme
						</span>
						<ModeChanger />
					</div>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>{/* settings modal trigger */}</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
