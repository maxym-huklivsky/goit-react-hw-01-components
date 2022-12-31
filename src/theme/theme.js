export const theme = Object.freeze({
  colors: {
    backCard: '#ebe9f0',
    secondText: '#706aa1',
    secondWeightText: '#35324d',
    white: '#ffffff',
    backHeadTable: '#18a5c4',
  },

  boxShadows: {
    main: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    cards: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  },

  spacing: (value = 1) => `${value * 4}px`,
  distanceBeetwenSections: '100px',
  minWidthOfContainer: '300px',
});
