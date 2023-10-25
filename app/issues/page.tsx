import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <div>
      <Link href='/issues/new' passHref>
        <button className="btn">Create new issue</button>
      </Link>
    </div>
  )
}

export default IssuesPage