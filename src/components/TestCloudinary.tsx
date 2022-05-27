import React, { Component, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { v2 as cloudinary } from 'cloudinary';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import CldCustUploadLgRestApi from './CldCustUploadLgRestApi';

export const TestCloudinary = () => {
  const [val, setVal] = useState('');

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'devmark-domino',
      apiKey: '614599225374226',
      apiSecret: 'ToAjzCy5-HSn1Ck7L2g4K7fYfl8',
    },
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image('test4');

  const onImageUpload = () => {
    // cloudinary.config({
    //   cloudName: 'devmark-domino',
    //   apiKey: '614599225374226',
    //   apiSecret: 'ToAjzCy5-HSn1Ck7L2g4K7fYfl8',
    // });
    // cloudinary.api.upload_preset('llx8qhzx');
    // cloudinary.uploader.upload(val, { type: 'image' });
  };
  return (
    <div className="space-y-8">
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
      <div className="border border-black">
        <input
          type="file"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={onImageUpload}>submit</button>
      </div>
      <div>
        <CldCustUploadLgRestApi />
      </div>
    </div>
  );
};
