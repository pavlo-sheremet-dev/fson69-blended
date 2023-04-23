import { Component, createRef } from 'react';
import { GridItem, CardItem } from 'components';

export class GalleryItem extends Component {
  liRef = createRef();

  componentDidMount() {
    if (!this.liRef.current) return;
    // ver 1
    // this.liRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });

    // ver 2
    const elementPosition = this.liRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  render() {
    const { src, alt, avg_color, isAnchor } = this.props;

    return (
      <GridItem ref={isAnchor ? this.liRef : null}>
        <CardItem color={avg_color}>
          <img src={src} alt={alt} />
        </CardItem>
      </GridItem>
    );
  }
}

// export const GalleryItem = ({ src, alt, avg_color, isAnchor = false }) => {
//   return (
//     <GridItem>
//       <CardItem color={avg_color}>
//         <img src={src} alt={alt} />
//       </CardItem>
//     </GridItem>
//   );
// };
