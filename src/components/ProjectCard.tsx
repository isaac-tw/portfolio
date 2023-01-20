export default function ProjectCard(props: {
  id: string,
  name: string,
  subtitle: string,
  year: number,
  duration: string,
}) {
  return (
    <div className='card'>
      <div className='image-section'>
        <img
          className='img --front'
          src={require(`../assets/${props.id}/thumbnails/${props.id}_thumbnail-01_IsaacHuang.jpg`)}
          alt={`${props.name}`}
        />
        <img
          className='img'
          src={require(`../assets/${props.id}/thumbnails/${props.id}_thumbnail-02_IsaacHuang.jpg`)}
          alt={`${props.name}`}
        />
      </div>
      <div className='title rfs-main'>{props.name}</div>
      <div className='subtitle rfs-sub'>{props.subtitle}</div>

    </div>
  );
}
