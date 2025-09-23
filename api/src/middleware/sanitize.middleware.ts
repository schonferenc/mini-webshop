import { Request, Response, NextFunction } from 'express';
import sanitizeHtml from 'sanitize-html';

/**
 * Dinamikus input sanitizáló middleware.
 *
 * @param fields - Opcionális: A sanitizálandó mezők neveinek tömbje.
 *                 Ha nincs megadva, akkor az összes string típusú mezőt megtisztítja.
 */
export const sanitizeInput = (fields?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.body && typeof req.body === 'object') {
      if (fields && fields.length > 0) {
        // Csak a megadott mezők sanitizálása
        fields.forEach((field) => {
          if (req.body[field] && typeof req.body[field] === 'string') {
            req.body[field] = sanitizeHtml(req.body[field], {
              allowedTags: [],
              allowedAttributes: {},
            });
          }
        });
      } else {
        // Az összes string típusú mező sanitizálása a req.body-ban
        Object.keys(req.body).forEach((key) => {
          if (typeof req.body[key] === 'string') {
            req.body[key] = sanitizeHtml(req.body[key], {
              allowedTags: [],
              allowedAttributes: {},
            });
          }
        });
      }
    }
    next();
  };
};
