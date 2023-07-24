import React, {
  lazy,
  Suspense
} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';

import styles from './index.module.css';


export default function gip() {
  const location = useLocation();
  console.log(`@site/docs/GIP-${location.hash.substring(1)}.md`);
  return (
    <Layout
      title={`All`}
      description="all GIPs">
      <main>
        <div className={clsx(styles.content)}>
        </div>
      </main>
    </Layout>
  );
}
