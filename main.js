import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

import { WebrtcProvider } from 'y-webrtc';
import * as Y from 'yjs';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorView } from '@tiptap/pm/view';

EditorView.name;
const ydoc = new Y.Doc();
const provider = new WebrtcProvider('example-document', ydoc);

new Editor({
  element: document.querySelector('#editor'),
  injectCSS: true,
  extensions: [
    StarterKit.configure({
      history: false,
    }),

    Placeholder.configure({
      placeholder: "I'm a placeholder",
    }),
    Collaboration.configure({
      document: ydoc,
    }),
    CollaborationCursor.configure({
      provider,
      user: {
        name: 'Cyndi Lauper',
        color: '#f783ac',
      },
    }),
  ],
  content: '<p>Hello World!</p>',
});
