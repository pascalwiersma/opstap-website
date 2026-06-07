import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function SocialIcons({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const icon = size === 'sm' ? 'text-lg' : 'text-xl'

  return (
    <div className="flex items-center gap-3">
      <a
        href="https://www.instagram.com/opstap_app/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${icon} text-[#E8611A] hover:opacity-70 transition-opacity`}
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/search/results/groups/?keywords=OpStap&origin=SWITCH_SEARCH_VERTICAL"
        target="_blank"
        rel="noopener noreferrer"
        className={`${icon} text-[#E8611A] hover:opacity-70 transition-opacity`}
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  )
}
