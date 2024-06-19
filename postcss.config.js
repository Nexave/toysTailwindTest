import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';
import postcssRename from 'postcss-rename';

export default {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer(),
    cssnano(),
    postcssRename({
      'file': 'style.min.css'
    })
  ]
}
