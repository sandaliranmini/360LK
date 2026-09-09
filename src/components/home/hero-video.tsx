

export default function HeroVideo(){
    return(
<header className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="\video\Welcome to 360LK.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/25" />
</header>
    );
  }