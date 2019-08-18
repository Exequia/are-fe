import { TestBed, async, fakeAsync, tick } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Location } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { MessageComponent } from './message/message.component'
import { HomeComponent } from './home/home.component'
import { CardComponent } from './card/card.component'
import { appRoutes } from './app-routing.module'

describe('AppComponent', () => {
  let location: Location
  let router: Router
  let fixture

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MessageComponent, HomeComponent, CardComponent],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents()

    router = TestBed.get(Router)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppComponent)
    // router.initialNavigation()
  }))
  it('should create the app', async(() => {
    // const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  // it(`should have as tags 'app'`, async(() => {
  // const fixture = TestBed.createComponent(AppComponent)
  //   const app = fixture.debugElement.componentInstance
  //   expect(app.tags).toEqual({})
  // }))
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to FNX-FE!');
  // }));
  it('navigate to "" should be falsy URL', fakeAsync(() => {
    router.navigate([''])
    tick()
    expect(location.path()).toBeFalsy()
  }))
  it('navigate to "home" should be /home URL', fakeAsync(() => {
    // const fixture = TestBed.createComponent(AppComponent)
    // router.initialNavigation()
    router.navigate(['home'])
    tick()
    expect(location.path()).toBe('/home')
  }))
})
