import { useEffect, useRef } from 'react'

import { useRouter } from 'next/router'

const usePrevAndCurrentPath = () => {
  const router = useRouter()
  const prevPath = useRef<string | undefined>(undefined)

  useEffect(() => {
    prevPath.current = router.asPath
  }, [router.asPath])

  return [prevPath.current, router.asPath]
}

export default usePrevAndCurrentPath
