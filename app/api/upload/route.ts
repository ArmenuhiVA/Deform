// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public/uploads');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, (err: Error | null, fields: any, files: any) => {
    if (err) {
      res.status(500).json({ error: 'File upload failed' });
      return;
    }

    const file = files.file[0];
    const oldPath = file.filepath;
    const newPath = path.join(uploadDir, file.originalFilename || 'upload');

    fs.renameSync(oldPath, newPath);

    res.status(200).json({ message: 'File uploaded successfully' });
  });
};

export default handler;
