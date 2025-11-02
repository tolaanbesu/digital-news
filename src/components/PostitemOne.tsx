import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './postitemOne.css';

type PostItem = {
  img?: string;
  avatar?: string;
  _id?: string;
  title?: string;
  category?: string;
  date?: string | number | Date;
  brief?: string;
  author?: string;
};

type PostitemOneProps = {
  item: PostItem;
  large?: boolean;
};

export default function PostitemOne({ item, large }: PostitemOneProps) {
  const imgSrc =
    item.img && typeof item.img === 'string' && item.img.length > 0
      ? item.img.startsWith('http')
        ? item.img
        : `/${item.img}`
      : '/placeholder.jpg';

  const avatarSrc =
    item.avatar && typeof item.avatar === 'string' && item.avatar.length > 0
      ? item.avatar.startsWith('http')
        ? item.avatar
        : `/${item.avatar}`
      : null;

  return (
    <div className={`post-entry-1 ${large ? 'lg' : undefined}`}>
      <Link href={`postitems/${item._id}`}>
        <Image
          src={imgSrc}
          alt={item.title || 'Post Image'}
          width={600}
          height={400}
          className="img-fluid"
          style={{ objectFit: 'cover' }}
        />
      </Link>

      <div className="post-meta">
        <span className="date">{item.category}</span>
        <span className="mx-1">
          <i className="bi bi-dot"></i>
        </span>
        <span>{item.date ? new Date(item.date).toLocaleDateString('en-US') : ''}</span>
      </div>

      <h2>
        <Link href={`postitems/${item._id}`}>{item.title}</Link>
      </h2>

      {large ? (
        <>
          <p className="mb-4 d-block">{item.brief}</p>

          <div className="d-flex align-items-center author">
            <div className="photo">
              {avatarSrc && (
                <Image
                    src={avatarSrc}
                    alt={item.title || 'Post Image'}
                    width={large ? 600 : 300}
                    height={large ? 400 : 200}
                    className="img-fluid"
                    style={{ objectFit: 'cover' }}
                  />

              )}
            </div>
            <div className="name">
              <h3 className="m-0 p-0">{item.author}</h3>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
