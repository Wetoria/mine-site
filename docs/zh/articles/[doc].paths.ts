import { posts } from '../../../components/Forward/DocData';

export default {
    paths() {
        const results = posts.filter((i) => i.locale === 'zh' && i.filenameWithoutLocale !== 'index').map((item) => ({
            params: {
                doc: item.filenameWithoutLocale,
                ...item,
            },
        }));
        console.log('posts is ', posts)
        return results;
    },
};
