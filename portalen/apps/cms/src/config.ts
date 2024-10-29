/* eslint-disable import/no-named-as-default */
import path from 'path';
import { viteBundler } from '@payloadcms/bundler-vite';
import { slateEditor } from '@payloadcms/richtext-slate';
import { Payload } from 'payload';
import { buildConfig } from 'payload/config';
import { BlogPosts } from './collections/BlogPosts';
import { BlogTags } from './collections/BlogTags';
import { CodeExamples } from './collections/CodeExamples';
import Components from './collections/Components';
import { Feedback } from './collections/Feedback';
import Foundations from './collections/Foundations';
import General from './collections/General';
import Media from './collections/Media';
import { MenuItems } from './collections/MenuItems';
import { PackageStats } from './collections/PackageStats';
import Patterns from './collections/Patterns';
import { SubMenus } from './collections/SubMenus';
import Users from './collections/Users';
import { GlobalSearch } from './components/global-search/GlobalSearch';
import getMongooseAdapter from './dbAdapter';
import { AllContentBlocks } from './globals/AllBlocks';
import { AllBlocks } from './globals/AllContentBlocks';
import { AllSections } from './globals/AllSections';
import { HomePage } from './globals/HomePage';
import { MainMenu } from './globals/MainMenu';
import { seedComponentPages, seedUsers } from './seed/index';

const config = buildConfig({
    routes: {
        api: '/cms',
    },
    admin: {
        bundler: viteBundler(),
        user: Users.slug,
        css: path.resolve(__dirname, 'ui/styles/global.scss'),
        components: {
            beforeDashboard: [GlobalSearch],
        },
    },
    globals: [AllContentBlocks, AllBlocks, AllSections, MainMenu, HomePage],
    collections: [
        Components,
        General,
        Patterns,
        Foundations,
        CodeExamples,
        Users,
        Media,
        MenuItems,
        SubMenus,
        BlogPosts,
        BlogTags,
        Feedback,
        PackageStats,
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'types.ts'),
    },
    onInit: async (payload: Payload) => {
        if (process.env.NODE_ENV === 'development') {
            await seedUsers(payload);
            await seedComponentPages(payload);
        }
    },
    editor: slateEditor({}),
    db: getMongooseAdapter(),
});

export default config;
