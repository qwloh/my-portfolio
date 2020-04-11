import React, {
  createContext,
  useState
} from 'react';
import PopUp from 'Inv/PopUp';
import Calc from './Project/js-calculator/Calc';
import Clock from './Project/pomodoro-clock/Clock';
import WrappedDrum from './Project/drum-machine/WrappedDrum';
import MarkdownPreview from './Project/markdown-previewer/MarkdownPreview';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [projects, newProject] = useState([{
      title: 'JS Calculator',
      tags: ['react', 'redux'],
      app: < Calc / > ,
      moreInfo: {
        description: "Le good ol' calculator challenge",
        features: [
          'Input control - No illogical decimal points entry, no unnecessary 0s',
          'Negative calculation - Distinguish between a subtraction operator and a negative sign',
          'Wrapping up - Continue calculation from the previous answer if an operator is entered or start afresh'
        ],
        pageLink: 'https://qwen-3108.github.io/js-calculator/',
        repoLink: 'https://github.com/qwen-3108/js-calculator'
      },
      animColor: '#55E6C1', //styling params
      scale: true
    },
    {
      title: 'Pomodoro Clock',
      tags: ['react', 'context'],
      app: < Clock / > ,
      moreInfo: {
        description: 'A handy productivity tool that helps users implement the pomodoro technique, a work ritual where one rotates between 25 minutes of work and 5 minutes of break',
        features: [
          'Customizable session and break lengths, min at 1 min and capped at 60 min',
          'Alarm notification at the end of each session'
        ],
        pageLink: 'https://qwen-3108.github.io/pomodoro-clock/',
        repoLink: 'https://github.com/qwen-3108/pomodoro-clock'
      },
      animColor: '#ff9ff3', //styling params
      scale: true
    },
    {
      title: 'Drum Machine',
      tags: ['react', 'context'],
      app: < WrappedDrum / > ,
      moreInfo: {
        description: 'A simple drum pad',
        features: [
          'Keystroke control',
          'Toggle between banks of sound effect'
        ],
        pageLink: 'https://qwen-3108.github.io/drum-machine/',
        repoLink: 'https://github.com/qwen-3108/drum-machine'
      },
      animColor: '#48dbfb', //styling params
      scale: true
    },
    {
      title: 'Markdown Previewer',
      tags: ['react'],
      app: < MarkdownPreview / > ,

      moreInfo: {
        description: 'Preview your Github Flavor Markdown on the go',
        features: ['Toggle between light and dark mode', 'Resizable editing panel'],
        pageLink: 'https://qwen-3108.github.io/markdown-previewer/',
        repoLink: 'https://github.com/qwen-3108/markdown-previewer'
      },
      animColor: '#1abc9c', //styling params
      scale: false
    }
  ]);

  return (
    <AppContext.Provider value={{ projects, newProject }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
