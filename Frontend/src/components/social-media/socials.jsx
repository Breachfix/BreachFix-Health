import './socials.css';

export default function SocialLinks() {
  const platforms = [
    { name: 'x', url: 'https://x.com/NtihanirahoJack', color: '#000000' },
    { name: 'instagram', url: 'https://www.instagram.com/breachfix/', color: '#E1306C' },
    { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=61559916151082&sk=grid', color: '#1877F2' },
    { name: 'github', url: 'https://github.com/Breachfix', color: '#333333' },
    { name: 'youtube', url: 'https://www.youtube.com/@Breachfixhealth', color: '#FF0000' },
    { name: 'tiktok', url: 'https://www.tiktok.com/@breachfixhealth', color: '#000000' },
    { name: 'medium', url: 'https://medium.com/@breachfix', color: '#12100E' }, // ✅ NEW
  ];

  return (
    <div className="social-wrapper">
      <h4 className="social-title">Follow Us</h4>
      <div className="social-links">
        {platforms.map(({ name, url, color }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-wrapper"
            style={{ '--hover-color': color }}
            title={name}
          >
            <img
              className={`icon-${name}`}
              src={`https://cdn.simpleicons.org/${name}/ffffff`}
              alt={name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}