import { Chapter } from "./types"

export function getAssessment(t: (key: string) => string): Chapter[] {
  return [
    {
      id: "speech",
      title: t('Tracker.assessment.chapters.speech.title'),
      sections: [
        {
          id: "sounds",
          title: t('Tracker.assessment.chapters.speech.sections.sounds.title'),
          items: t('Tracker.assessment.chapters.speech.sections.sounds.items')
        },
        {
          id: "articulation",
          title: t('Tracker.assessment.chapters.speech.sections.articulation.title'),
          items: t('Tracker.assessment.chapters.speech.sections.articulation.items')
        },
        {
          id: "vocab",
          title: t('Tracker.assessment.chapters.speech.sections.vocab.title'),
          items: t('Tracker.assessment.chapters.speech.sections.vocab.items')
        },
        {
          id: "syllables",
          title: t('Tracker.assessment.chapters.speech.sections.syllables.title'),
          items: t('Tracker.assessment.chapters.speech.sections.syllables.items')
        },
        {
          id: "phonemic",
          title: t('Tracker.assessment.chapters.speech.sections.phonemic.title'),
          items: t('Tracker.assessment.chapters.speech.sections.phonemic.items')
        }
      ]
    },
    {
      id: "sensomotor",
      title: t('Tracker.assessment.chapters.sensomotor.title'),
      sections: [
        {
          id: "fine",
          title: t('Tracker.assessment.chapters.sensomotor.sections.fine.title'),
          items: t('Tracker.assessment.chapters.sensomotor.sections.fine.items')
        },
        {
          id: "gross",
          title: t('Tracker.assessment.chapters.sensomotor.sections.gross.title'),
          items: t('Tracker.assessment.chapters.sensomotor.sections.gross.items')
        },
        {
          id: "senses",
          title: t('Tracker.assessment.chapters.sensomotor.sections.senses.title'),
          items: t('Tracker.assessment.chapters.sensomotor.sections.senses.items')
        },
        {
          id: "breath",
          title: t('Tracker.assessment.chapters.sensomotor.sections.breath.title'),
          items: t('Tracker.assessment.chapters.sensomotor.sections.breath.items')
        }
      ]
    },
    {
      id: "cognitive",
      title: t('Tracker.assessment.chapters.cognitive.title'),
      sections: [
        {
          id: "attention",
          title: t('Tracker.assessment.chapters.cognitive.sections.attention.title'),
          items: t('Tracker.assessment.chapters.cognitive.sections.attention.items')
        },
        {
          id: "memory",
          title: t('Tracker.assessment.chapters.cognitive.sections.memory.title'),
          items: t('Tracker.assessment.chapters.cognitive.sections.memory.items')
        },
        {
          id: "thinking",
          title: t('Tracker.assessment.chapters.cognitive.sections.thinking.title'),
          items: t('Tracker.assessment.chapters.cognitive.sections.thinking.items')
        },
        {
          id: "play",
          title: t('Tracker.assessment.chapters.cognitive.sections.play.title'),
          items: t('Tracker.assessment.chapters.cognitive.sections.play.items')
        }
      ]
    },
    {
      id: "social",
      title: t('Tracker.assessment.chapters.social.title'),
      sections: [
        {
          id: "emotion",
          title: t('Tracker.assessment.chapters.social.sections.emotion.title'),
          items: t('Tracker.assessment.chapters.social.sections.emotion.items')
        },
        {
          id: "comm",
          title: t('Tracker.assessment.chapters.social.sections.comm.title'),
          items: t('Tracker.assessment.chapters.social.sections.comm.items')
        },
        {
          id: "socialize",
          title: t('Tracker.assessment.chapters.social.sections.socialize.title'),
          items: t('Tracker.assessment.chapters.social.sections.socialize.items')
        }
      ]
    }
  ]
}
