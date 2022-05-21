
import { HeaderComponent } from './header.component';

xdescribe('HeaderComponent', () => {
    describe('HeaderComponent' , () => {
      let component:HeaderComponent;
      beforeEach(() => {
        component = new HeaderComponent();
      })
      it('should raise page selectedPage event when navigate', function () {
        let selectPage = 'first-page';
        component.selectedPage.subscribe(page => selectPage = page);
        component.navigate('about me');
        expect(selectPage).toEqual('about');
        component.navigate('contact');
        expect(selectPage).toEqual('contact');
        component.navigate('education');
        expect(selectPage).toEqual('education');
        component.navigate('experience');
        expect(selectPage).toEqual('experience');
        component.navigate('home');
        expect(selectPage).toEqual('home');
        component.navigate('skills');
        expect(selectPage).toEqual('skills');
        component.navigate('projects');
        expect(selectPage).toEqual('projects');
        component.navigate('first-page');
        expect(selectPage).toEqual('first-page');

      });
    })
});
