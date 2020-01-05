// @flow strict
import CMS from 'netlify-cms-app';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/js';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('posts', PostPreview);
