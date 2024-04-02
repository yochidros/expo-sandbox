import { RefAttributes } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

export interface ImageViewerProps {
  placeholderImageSource: ImageSourcePropType;
  selectedImage?: string;
}
const ImageViewer = ({
  placeholderImageSource,
  selectedImage,
}: ImageViewerProps & RefAttributes<HTMLDivElement>) => {
  const source = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={source} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 400,
    borderRadius: 10,
  },
});

export default ImageViewer;
