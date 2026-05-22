<?php

namespace Tests\Feature;

use Tests\TestCase;

class AboutPageTest extends TestCase
{
    public function test_about_us_page_is_served_by_react_shell(): void
    {
        $response = $this->get('/about-us');

        $response->assertOk();
        $response->assertSee('<div id="root"></div>', false);
        $response->assertSee('Shoe Store', false);
    }
}
