# ScrollThenFixed
Created with CodeSandbox

This component should allow a component that the height is overflown
        from the viewport screen to scroll until the end (meaning: cannot scroll
        the element anymore) then make the element fixed to the bottom of the
        viewport. If the element height is smaller than the viewport, the
        element should be fixed to the top.
        
 Examples:
 
 1. Element will stick to bottom of page once done scrolling
![Element stick to bottom as scrolling](/Element stick to bottom as scrolling.gif)

2. Element will stick to top of page if element height is less than viewport height
![Element stick to top](/Element less than viewport.gif)

3. Element will remain as it is if the element height is larger than other element
![Element remain as it is](/element more than others.gif)
