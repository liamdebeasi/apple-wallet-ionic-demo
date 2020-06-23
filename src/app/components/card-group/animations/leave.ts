import { AnimationController } from '@ionic/angular';

const createRootAnimation = (baseEl: HTMLElement, presentingEl: HTMLElement, cardElement: HTMLElement, animationCtrl: AnimationController) => {
  const rootAnimation = animationCtrl.create()
    .duration(600)
    .addElement(baseEl)
    .easing('cubic-bezier(0.32, 0.72, 0, 1)')
    .beforeAddClass('transaction-modal-hidden')
    .afterRemoveClass('transaction-modal-hidden')
  
  const modalCloseButton = animationCtrl.create()
    .addElement(presentingEl.querySelector('ion-button.modal-close'))
    .keyframes([
      { offset: 0, opacity: 1, transform: 'translate(-22px, -51px) scale(1)' },
      { offset: 1, opacity: 0, transform: 'translate(-36px, -25px) scale(2)' }
    ]);
    
  const modalMoreButton = animationCtrl.create()
    .addElement(presentingEl.querySelector('ion-icon.modal-more'))
    .keyframes([
      { offset: 0, opacity: 1, transform: 'translate(12px, -42px) scale(1)' },
      { offset: 1, opacity: 0, transform: 'translate(0px, 8px) scale(1.15)' }
    ]);
    
  const homePageTitle = animationCtrl.create()
    .addElement(presentingEl.querySelector('.header ion-title'))
    .keyframes([
      { offset: 0, opacity: 0, transform: 'translate(0, -40px) scale(0.6)' },
      { offset: 1, opacity: 1, transform: 'translate(0, 0) scale(1)' }
    ]);
    
  const homePageButton = animationCtrl.create()
    .addElement(presentingEl.querySelector('.header ion-icon.add-to-wallet'))
    .keyframes([
      { offset: 0, opacity: 0.1, transform: 'translate(12px, -50px) scale(0.85)' },
      { offset: 1, opacity: 1, transform: 'translate(0, 0) scale(1)' }
    ]);
      
  let foundMainCard = false;
  const allCards = Array.from(presentingEl.querySelectorAll('card-group'));
  let beforeCards = [];
  let afterCards = [];
  
  allCards.forEach(card => {
    if (card === cardElement) {
      foundMainCard = true;
    } else {
      if (foundMainCard) {
        afterCards.push(card);
      } else {
        beforeCards.push(card);
      }
    }
  })
    
  const beforeCardsAnimation = animationCtrl.create()
    .addElement(beforeCards)
    .keyframes([
      { offset: 0, transform: 'translate(0, -20px) scale(0.8)', opacity: 0 },
      { offset: 1, transform: 'translate(0, 0) scale(1)', opacity: 1 }
    ]);
    
  const afterCardsAnimation = animationCtrl.create()
    .addElement(afterCards)
    .keyframes([
      { offset: 0, transform: 'translate(0, 100vh)' },
      { offset: 1, transform: 'translate(0, 0)' }
    ]);

  return rootAnimation.addAnimation([modalCloseButton, modalMoreButton, homePageTitle, homePageButton, beforeCardsAnimation, afterCardsAnimation]);
}

export const createTransactionLeaveAnimation = (baseEl: HTMLElement, presentingEl: HTMLElement, cardElement: HTMLElement, animationCtrl: AnimationController) => {
  const rootAnimation = createRootAnimation(baseEl, presentingEl, cardElement, animationCtrl);

  const transactionsList = animationCtrl.create()
    .addElement(baseEl.querySelector('.transactions-list'))
    .keyframes([
      { offset: 0, opacity: 1 },
      { offset: 1, opacity: 0 }
    ])
    
  const cardBBox = cardElement.getBoundingClientRect();
  const mainCard = animationCtrl.create()
    .addElement(cardElement)
    .easing('cubic-bezier(0.17, 0.67, 0.22, 1.26)')
    .keyframes([
      { offset: 0, transform: `translate(0, calc(-${cardBBox.top - 60}px + var(--ion-safe-area-top)))`},
      { offset: 1, transform: 'translate(0, 0)' }
    ]);  
  
  return rootAnimation.addAnimation([transactionsList, mainCard]);
}

export const createGenericLeaveAnimation = (baseEl: HTMLElement, presentingEl: HTMLElement, cardElement: HTMLElement, animationCtrl: AnimationController) => {
  const rootAnimation = createRootAnimation(baseEl, presentingEl, cardElement, animationCtrl)
    .afterAddWrite(() => cardElement.querySelectorAll('card').forEach(c => c.classList.add('card-mask')))
  
  const cardBBox = cardElement.getBoundingClientRect();
  
  const allCards = Array.from(cardElement.querySelectorAll('card'));
  const primaryCard = allCards[allCards.length - 1];
  const secondaryCards = allCards.slice(0, allCards.length - 1);
  
  const cardOffset = 50;
  const totalCardOffset = cardOffset * (secondaryCards.length);
  const mainCard = animationCtrl.create()
    .addElement(cardElement)
    .keyframes([
      { offset: 0, transform: `translate(0, calc(-${cardBBox.top}px + var(--ion-safe-area-top) + ${totalCardOffset}px))` },
      { offset: 1, transform: 'translate(0, 0)'},
    ]);
    
  secondaryCards.forEach((card, i) => {
    const cardAnimation = animationCtrl.create()
      .addElement(card)
      .keyframes([
        { offset: 0, transform: `translate(${94 * Math.abs(i - secondaryCards.length)}vw, +${10 * Math.abs(i - secondaryCards.length)}px)`},
        { offset: 1, transform: 'translate(0, 0)' },
      ]);

    rootAnimation.addAnimation(cardAnimation);
  })
      
  return rootAnimation.addAnimation([mainCard]);
}