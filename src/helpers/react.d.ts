import { ReactNode } from 'react'

import { SxProps, Theme } from '@mui/material'

// Cleaner extend with children/className
// When no T is provided, unknown is assumed, therefore it can be used as a type
export type WithChildren<T = unknown> = T & { children?: ReactNode }
export type WithCN<T = unknown> = T & { className?: string }
export type WithCNs<T = unknown> = T & { classNames?: { [className: string]: string } }
export type WithSX<T = unknown> = T & { sx?: SxProps<Theme> }
export type WithSXs<T = unknown> = T & { sxs?: { [className: string]: SxProps<Theme> } }

/**
 * ### useIsomorphicLayoutEffect
 * - When the app is on client, returns `useEffect`
 * - When is on server, returns `useLayoutEffect`
 *
 * `useLayoutEffect` is identical to `useEffect`, but **it fires synchronously after all DOM mutations**.
 *
 * We want to use this on server to read layout from the DOM and synchronously re-render.
 *
 * Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
 */
export const useIsomorphicLayoutEffect = isClient() ? React.useLayoutEffect : React.useEffect
