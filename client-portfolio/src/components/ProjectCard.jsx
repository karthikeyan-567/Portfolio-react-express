export default function ProjectCard({ img, title, desc, tech }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="rounded-xl" />

      <h2 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="text-gray-300 text-sm mt-2">
        {desc}
      </p>

      <p className="text-[#3DC2EC] text-xs mt-3">
        {tech}
      </p>
    </div>
  )
}
