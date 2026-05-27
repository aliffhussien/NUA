interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export function TeamMemberCard({ name, role, bio, initials }: TeamMemberCardProps) {
  return (
    <div className="card-glass rounded-2xl p-8 flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00D4B8] to-[#0A4A8C] flex items-center justify-center text-white font-syne font-bold text-xl flex-shrink-0">
          {initials}
        </div>
        <div>
          <h3 className="font-syne font-semibold text-white text-lg">{name}</h3>
          <p className="text-[#00D4B8] text-sm font-inter font-medium">{role}</p>
        </div>
      </div>
      <p className="text-white/70 font-inter text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
