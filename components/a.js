export default function A({ text, href }) {
  return (
    <a target='_blank' href={href} rel='noopener noreferrer nofollow'>
      {text}
    </a>
  )
}
