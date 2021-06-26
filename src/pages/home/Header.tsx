import React, { useRef } from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

function Header({ isUploading = false, onPhotoSelect }) {
  let hiddenInput = useRef<HTMLInputElement | null>(null);

  return (
    <Flex px="4" py="4" justify="space-between">
      <Flex align="start">
        <Button
          size="sm"
          variant="outline"
          variantColor="rgb(96, 93, 236)"
          isLoading={isUploading}
          loadingText="Uploading..."
          onClick={() => hiddenInput?.current?.click()}>
          Upload Photo
        </Button>

        <input
          hidden
          type="file"
          ref={hiddenInput}
          onChange={(e) => onPhotoSelect(e.target!.files![0])}
        />
      </Flex>
    </Flex>
  );
}

export default Header;
