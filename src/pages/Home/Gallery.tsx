// import plugins if you need

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import PageTitle from "../Shared/PageTitle";

const photos = [
  {
    src: "https://www.thetreecenter.com/c/uploads/crimson-queen-japanese-maple-21-e1644952252758-jpg-webp.avif",
    width: 800,
    height: 600,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/2014/06/thuja-row-450x450.avif",
    width: 1600,
    height: 900,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/crimson-queen-japanese-maple-21-e1644952252758-jpg-webp.avif",
    width: 800,
    height: 600,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/2014/06/thuja-row-450x450.avif",
    width: 1600,
    height: 900,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/crimson-queen-japanese-maple-21-e1644952252758-jpg-webp.avif",
    width: 800,
    height: 600,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/2014/06/thuja-row-450x450.avif",
    width: 1600,
    height: 900,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/crimson-queen-japanese-maple-21-e1644952252758-jpg-webp.avif",
    width: 800,
    height: 600,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/2014/06/thuja-row-450x450.avif",
    width: 1600,
    height: 900,
  },
  {
    src: "https://www.thetreecenter.com/c/uploads/crimson-queen-japanese-maple-21-e1644952252758-jpg-webp.avif",
    width: 800,
    height: 600,
  },
];

const Gallery = () => {
  return (
    <div className="App">
      <div>
        <PageTitle sideName="Our" mainName="Gallery" />
      </div>
      <div className="rounded-xl">
        <RowsPhotoAlbum
          photos={photos}
          render={{
            wrapper: (props) => {
              props.className = `${props.className} hover:scale-125 transition-transform`;

              return <div className="duration-100 " {...props} />;
            },
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
