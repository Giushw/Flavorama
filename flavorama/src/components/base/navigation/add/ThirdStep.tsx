import { FC, useRef, useEffect, useState } from 'react';
import {
  Fieldset,
  Text,
  Group,
  Button,
  rem,
  Image,
  Stack,
  ScrollArea,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';

import '@mantine/dropzone/styles.css';

interface ThirdStepProps {
  files: FileWithPath[],
  filesSet: React.Dispatch<React.SetStateAction<FileWithPath[]>>
  setBase64String: React.Dispatch<React.SetStateAction<string>>,
};

const ThirdStep: FC<ThirdStepProps> = ({
  files,
  filesSet,
  setBase64String,
}) => {
  const openRef = useRef<() => void>(null);

  useEffect(() => {
    console.log('files data:', files);
    if (files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setBase64String(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  }, [files, setBase64String]);

  return (
    <Fieldset legend="Image Info" radius="lg" mt={20} mih={275}>
      <Stack w={'100%'} align='center'>
        <Stack w={'80%'} align='center'>
          <Dropzone
            openRef={openRef}
            onDrop={filesSet}
            radius="xl"
            accept={IMAGE_MIME_TYPE}
            maxSize={5 * 1024 ** 2}
          >
            <div style={{ pointerEvents: 'none' }}>
              <Group justify="center">
                <Dropzone.Accept>
                  <IconDownload
                    style={{ width: rem(50), height: rem(50) }}
                    color={'teal'}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{ width: rem(50), height: rem(50) }}
                    color={'red'}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
                </Dropzone.Idle>
              </Group>

              <Text ta="center" fw={700} fz="lg" mt="md">
                <Dropzone.Accept>Drop files here</Dropzone.Accept>
                <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                <Dropzone.Idle>Upload an Image</Dropzone.Idle>
              </Text>
              <Text ta="center" fz="sm" mt="xs" c="dimmed" mb='lg'>
                Drag&apos;n&apos;drop files here to upload. We can accept only files that
                are less than 30mb in size.
              </Text>
            </div>
          </Dropzone>

          <Button 
            variant='filled'
            radius={'md'}
            autoContrast
            size="md"
            w={rem(250)}
            m={'0 auto'}
            mt={rem(-40)}
            onClick={() => openRef.current?.()} 
          >
            Select Image
          </Button>
        </Stack>
        
        {files.length > 0 &&
          <Preview image={files[0]} />
        }
      </Stack>
    </Fieldset>
  );
};

export default ThirdStep;

interface PreviewProps {
  image: FileWithPath,
};

const Preview: FC<PreviewProps> = ({ image }) => {
  const url = URL.createObjectURL(image);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [url]);

  return (
    <Fieldset legend="Preview" radius="lg" mt={20} mih={275}>
      <Stack align='center'>
        <Text>{image.path}</Text>

        <ScrollArea h={300} w={'70%'} pos={'relative'}>
          <Image src={url} onLoad={() => URL.revokeObjectURL(url)} /> 
        </ScrollArea>
      </Stack>
    </Fieldset>
  );
};
