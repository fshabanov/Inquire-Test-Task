import sanitize from 'sanitize-html';

const sanitizeHtml = (html: string): string => {
  return sanitize(html);
};

export { sanitizeHtml };
